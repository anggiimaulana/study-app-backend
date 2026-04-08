<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Terpadu LMN - Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root { --ocean-blue: #0077b6; --ocean-dark: #023e8a; }
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Plus Jakarta Sans', sans-serif;}
        body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #023e8a 0%, #0077b6 100%); padding: 20px;}
        .login-card { background: white; width: 100%; max-width: 420px; border-radius: 24px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);}
        .logo-area { text-align: center; margin-bottom: 30px; }
        .logo-area h1 { color: var(--ocean-dark); font-size: 28px; margin-bottom: 10px; }
        .logo-area p { color: #666; font-size: 14px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: #444; font-size: 14px; font-weight: 600;}
        .form-group input { width: 100%; padding: 14px 16px; border: 1.5px solid #e0e0e0; border-radius: 12px; font-size: 15px; transition: border-color 0.2s; outline:none;}
        .form-group input:focus { border-color: var(--ocean-blue); }
        .btn-submit { width: 100%; padding: 14px; background: var(--ocean-blue); color: white; border: none; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s;}
        .btn-submit:hover { background: var(--ocean-dark); }
        .alert { padding: 14px; border-radius: 10px; margin-bottom: 20px; font-size: 14px; font-weight:500;}
        .alert.error { background: #ffe4e6; color: #e11d48; border: 1px solid #fda4af;}
        .alert.info { background: #e0f2fe; color: #0284c7; border: 1px solid #7dd3fc;}
    </style>
</head>
<body>
    <div class="login-card">
        <div class="logo-area">
            <h1>LMN Portal</h1>
            <p>Sistem Informasi Manajemen Sekolah Terpadu</p>
        </div>
        
        @if(session('error'))
            <div class="alert error">{{ session('error') }}</div>
        @endif
        @if(session('status'))
            <div class="alert info">{{ session('status') }}</div>
        @endif
        @if($errors->any())
            <div class="alert error">{{ $errors->first() }}</div>
        @endif

        <form action="{{ route('login') }}" method="POST">
            @csrf
            <div class="form-group">
                <label>Email ID</label>
                <input type="email" name="email" value="{{ old('email') }}" required placeholder="admin@smk.id">
            </div>
            <div class="form-group">
                <label>Kata Sandi</label>
                <input type="password" name="password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-submit">Masuk ke Dashboard</button>
        </form>
    </div>
</body>
</html>