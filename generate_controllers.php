<?php

$controllers = [
    'AttendanceController',
    'CbtController',
    'MyfessController',
    'JobController',
    'LibraryController',
    'PaymentController',
    'ComplaintController',
    'AnnouncementController',
    'ClassroomController',
    'TaskSubmissionController',
];

$services = [
    'AttendanceService',
    'CbtService',
    'EncryptionService',
];

$controllerDir = __DIR__ . '/app/Http/Controllers/Api';
$serviceDir = __DIR__ . '/app/Services';

if (!is_dir($controllerDir)) mkdir($controllerDir, 0755, true);
if (!is_dir($serviceDir)) mkdir($serviceDir, 0755, true);

// Create Controllers
foreach ($controllers as $name) {
    if (!file_exists($controllerDir . '/' . $name . '.php')) {
        $content = "<?php\n\nnamespace App\Http\Controllers\Api;\n\nuse App\Http\Controllers\Controller;\nuse Illuminate\Http\Request;\n\nclass {$name} extends Controller\n{\n    // TODO: Implement endpoints\n}\n";
        file_put_contents($controllerDir . '/' . $name . '.php', $content);
    }
}

// Create Services
foreach ($services as $name) {
    if (!file_exists($serviceDir . '/' . $name . '.php')) {
        $content = "<?php\n\nnamespace App\Services;\n\nclass {$name}\n{\n    // TODO: Implement business logic\n}\n";
        file_put_contents($serviceDir . '/' . $name . '.php', $content);
    }
}

echo "Controllers and Services structured.";
