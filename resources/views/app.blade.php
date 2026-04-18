<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title inertia>{{ config('app.name', 'Study App Platform') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

        <!-- SweetAlert2 -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-gray-50 text-gray-900 min-h-screen">
        @inertia

        <!-- Global Alert System -->
        <script>
            const AppAlert = {
                toast: (type, message) => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: { popup: 'rounded-xl shadow-xl border border-gray-100 text-[11px] py-1.5 px-3 min-h-0 max-w-[280px]' },
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer);
                            toast.addEventListener('mouseleave', Swal.resumeTimer);
                        }
                    });
                    const icons = {
                        success: { icon: 'success', iconColor: '#10b981' },
                        error:   { icon: 'error',   iconColor: '#ef4444' },
                        warning: { icon: 'warning', iconColor: '#f59e0b' },
                        info:    { icon: 'info',    iconColor: '#2563eb' },
                    };
                    Toast.fire({ icon: icons[type]?.icon || 'info', iconColor: icons[type]?.iconColor || '#2563eb', title: `<span class="text-[12px] font-bold ml-1">${message}</span>` });
                },
                success: (title, text = '') => Swal.fire({ icon: 'success', title: `<h3 class="text-lg font-semibold">${title}</h3>`, html: `<p class="text-sm text-gray-500">${text}</p>`, iconColor: '#10b981', confirmButtonColor: '#10b981', confirmButtonText: 'OK', customClass: { popup: 'rounded-2xl max-w-sm', confirmButton: 'rounded-xl px-5 py-2 text-sm' } }),
                error: (title, text = '') => Swal.fire({ icon: 'error', title: `<h3 class="text-lg font-semibold">${title}</h3>`, html: `<p class="text-sm text-gray-500">${text}</p>`, iconColor: '#ef4444', confirmButtonColor: '#ef4444', confirmButtonText: 'OK', customClass: { popup: 'rounded-2xl max-w-sm', confirmButton: 'rounded-xl px-5 py-2 text-sm' } }),
                warning: (title, text = '') => Swal.fire({ icon: 'warning', title: `<h3 class="text-lg font-semibold">${title}</h3>`, html: `<p class="text-sm text-gray-500">${text}</p>`, iconColor: '#f59e0b', confirmButtonColor: '#f59e0b', confirmButtonText: 'OK', customClass: { popup: 'rounded-2xl max-w-sm', confirmButton: 'rounded-xl px-5 py-2 text-sm' } }),
                confirm: (title, text, confirmText = 'Ya, Lanjutkan', cancelText = 'Batal') => {
                    return Swal.fire({ icon: 'question', title: `<h3 class="text-lg font-semibold">${title}</h3>`, html: `<p class="text-sm text-gray-500">${text}</p>`, iconColor: '#2563eb', showCancelButton: true, confirmButtonColor: '#2563eb', cancelButtonColor: '#6b7280', confirmButtonText: confirmText, cancelButtonText: cancelText, reverseButtons: true, customClass: { popup: 'rounded-2xl max-w-sm', confirmButton: 'rounded-xl px-5 py-2 text-sm font-medium', cancelButton: 'rounded-xl px-5 py-2 text-sm font-medium' } });
                },
                confirmDelete: (title = 'Hapus Data?', text = 'Data yang dihapus tidak dapat dikembalikan.') => {
                    return Swal.fire({ icon: 'warning', title: `<h3 class="text-lg font-semibold">${title}</h3>`, html: `<p class="text-sm text-gray-500">${text}</p>`, iconColor: '#ef4444', showCancelButton: true, confirmButtonColor: '#ef4444', cancelButtonColor: '#6b7280', confirmButtonText: 'Ya, Hapus!', cancelButtonText: 'Batal', reverseButtons: true, customClass: { popup: 'rounded-2xl max-w-sm', confirmButton: 'rounded-xl px-5 py-2 text-sm font-medium', cancelButton: 'rounded-xl px-5 py-2 text-sm font-medium' } });
                },
                loading: (title = 'Memproses...') => Swal.fire({ title, allowOutsideClick: false, allowEscapeKey: false, showConfirmButton: false, customClass: { popup: 'rounded-2xl' }, didOpen: () => Swal.showLoading() }),
                close: () => Swal.close()
            };
            window.AppAlert = AppAlert;
        </script>
    </body>
</html>
