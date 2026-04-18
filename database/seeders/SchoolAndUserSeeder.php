<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SchoolAndUserSeeder extends Seeder
{
    public function run(): void
    {
        $school = School::create([
            'name' => 'SMK Negeri 1 Indramayu',
            'npsn' => '20212345',
            'address' => 'Jl. Jenderal Sudirman No. 1, Indramayu',
            'phone' => '0234-123456',
            'email' => 'info@smkn1indramayu.sch.id',
            'website' => 'https://smkn1indramayu.sch.id',
            'status' => 'active',
        ]);

        User::create([
            'name' => 'Super Administrator',
            'email' => 'superadmin@lmn.id',
            'password' => Hash::make('password'),
            'role' => 'super-admin'
        ]);

        $school->users()->create([
            'name' => 'Admin Sekolah',
            'email' => 'admin@smk.id',
            'password' => Hash::make('password'),
            'role' => 'school-admin'
        ]);

        $school->users()->create([
            'name' => 'Budi Guru RPL (Wali & BK)',
            'email' => 'guru@smk.id',
            'password' => Hash::make('password'),
            'role' => 'teacher'
        ]);

        $school->users()->create([
            'name' => 'Siti Guru BKK',
            'email' => 'bkk@smk.id',
            'password' => Hash::make('password'),
            'role' => 'teacher'
        ]);

        $school->users()->create([
            'name' => 'Agus Guru Biasa',
            'email' => 'gurubiasa@smk.id',
            'password' => Hash::make('password'),
            'role' => 'teacher'
        ]);

        $school->users()->create([
            'name' => 'Siswa Teladan',
            'email' => 'siswa@smk.id',
            'password' => Hash::make('password'),
            'role' => 'student'
        ]);
    }
}
