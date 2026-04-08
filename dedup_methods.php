<?php
$controllersDir = __DIR__ . '/app/Http/Controllers';
$files = glob($controllersDir . '/*.php');

foreach ($files as $file) {
    $content = file_get_contents($file);
    
    // Find all public functions
    if (preg_match_all('/public function (page_[a-zA-Z0-9_]+)\(\)\s*\{[^\}]+\}/', $content, $matches)) {
        $seen = [];
        $newContent = $content;
        
        // Build replacements
        foreach ($matches[0] as $i => $fullMatch) {
            $funcName = $matches[1][$i];
            
            if (isset($seen[$funcName])) {
                // If we've seen this function before, replace this specific exact match with empty string
                // But we must be careful with str_replace replacing ALL instances. 
                // So we do a single replacement using preg_replace
                $escaped = preg_quote($fullMatch, '/');
                $newContent = preg_replace('/' . $escaped . '/', '', $newContent, 1);
            } else {
                $seen[$funcName] = true;
            }
        }
        
        if ($content !== $newContent) {
            // Because we replaced, there might be empty lines, let's just save.
            file_put_contents($file, $newContent);
            echo "Deduplicated functions in " . basename($file) . "\n";
        }
    }
}
