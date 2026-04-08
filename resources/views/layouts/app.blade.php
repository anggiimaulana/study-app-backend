<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LMN Study App - Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lucide-static@0.321.0/font/lucide.min.css">
    <script src="https://cdn.jsdelivr.net/npm/lucide@latest"></script>
    <style>
        :root {
            --ocean-blue: #0077b6;
            --ocean-light: #0096c7;
            --ocean-dark: #023e8a;
            --ocean-bg: #f0f8ff;
            --text-main: #333333;
            --text-muted: #666666;
            --white: #ffffff;
            --danger: #ef476f;
            --success: #06d6a0;
            --shadow-sm: 0 4px 6px -1px rgba(0, 119, 182, 0.1);
            --shadow-md: 0 10px 15px -3px rgba(0, 119, 182, 0.15);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
        body { background-color: var(--ocean-bg); color: var(--text-main); }
        .sidebar { width: 250px; background: var(--white); height: 100vh; position: fixed; left: 0; top: 0; border-right: 1px solid #e0f0ff; display: flex; flex-direction: column; }
        .brand { padding: 24px; font-size: 24px; font-weight: 700; color: var(--ocean-dark); display:flex; align-items:center; gap: 10px;}
        .menu { list-style: none; padding: 0 15px; flex: 1;}
        .menu li { margin-bottom: 8px; }
        .menu a { text-decoration: none; padding: 12px 16px; display: flex; align-items: center; gap: 12px; color: var(--text-muted); border-radius: 8px; font-weight: 500; transition: all 0.2s;}
        .menu a:hover, .menu a.active { background: var(--ocean-blue); color: var(--white); box-shadow: var(--shadow-sm); }
        .main-content { margin-left: 250px; padding: 30px; }
        .topbar { display: flex; justify-content: space-between; align-items: center; background: var(--white); padding: 15px 30px; border-radius: 12px; box-shadow: var(--shadow-sm); margin-bottom: 30px; }
        .user-profile { display: flex; align-items: center; gap: 15px; }
        .btn-logout { background: var(--danger); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; }
        
        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 30px;}
        .stat-card { background: var(--white); padding: 24px; border-radius: 16px; box-shadow: var(--shadow-sm); display:flex; align-items:center; justify-content: space-between;}
        .stat-info h3 { font-size: 14px; color: var(--text-muted); margin-bottom: 8px; }
        .stat-info h2 { font-size: 32px; color: var(--ocean-dark); }
        .stat-icon { width: 48px; height: 48px; background: var(--ocean-bg); border-radius: 12px; display:flex; align-items:center; justify-content:center; color: var(--ocean-blue); }
        
        /* Tables & Panels */
        .panel { background: var(--white); padding: 24px; border-radius: 16px; box-shadow: var(--shadow-sm); margin-bottom:24px;}
        .panel h2 { margin-bottom: 20px; color: var(--ocean-dark); display:flex; align-items:center; gap: 8px; font-size: 18px;}
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 14px 16px; text-align: left; border-bottom: 1px solid #e0f0ff; }
        th { color: var(--text-muted); font-weight: 600; font-size: 14px; text-transform:uppercase; letter-spacing: 0.5px;}
        td { color: var(--text-main); font-size: 15px; font-weight: 500;}
        .badge { padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge.active { background: #d1fae5; color: var(--success); }
        .badge.inactive { background: #ffe4e6; color: var(--danger); }
        
        button { cursor: pointer; }
    </style>
</head>
<body>
    @yield('content')
    <script>
        lucide.createIcons();
    </script>
</body>
</html>