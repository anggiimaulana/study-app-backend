<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            SchoolAndUserSeeder::class,
            AcademicSeeder::class,
            CbtSeeder::class,
            FeatureSeeder::class,
        ]);

        $this->command->info('==== LMN SEEDING SUCCESS ====');
        $this->command->info('Super Admin: superadmin@lmn.id');
        $this->command->info('Admin Sekolah: admin@smk.id');
        $this->command->info('Guru: guru@smk.id');
        $this->command->info('Siswa: siswa@smk.id');
        $this->command->info('Global Password: password');
    }
}
