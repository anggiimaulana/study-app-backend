import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function MasterData({ students, teachers }) {
    const [tab, setTab] = useState('students');
    const [modalOpen, setModalOpen] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const [search, setSearch] = useState('');

    const dummyStudents = [
        { id: 1, user: { name: 'Budi Santoso', email: 'budi@edu.id' }, nisn: '0012345001', nis: '2024001', classroom: { name: 'X RPL 1' }, gender: 'L', phone: '081234567890', status: 'active' },
        { id: 2, user: { name: 'Siti Nurhaliza', email: 'siti@edu.id' }, nisn: '0012345002', nis: '2024002', classroom: { name: 'X RPL 2' }, gender: 'P', phone: '081234567891', status: 'active' },
        { id: 3, user: { name: 'Ahmad Fauzi', email: 'ahmad@edu.id' }, nisn: '0012345003', nis: '2024003', classroom: { name: 'XI RPL 1' }, gender: 'L', phone: '081234567892', status: 'inactive' },
    ];
    const dummyTeachers = [
        { id: 1, user: { name: 'Pak Ahmad Hidayat', email: 'ahmad.h@edu.id' }, nip: '198501012010011001', subject: 'Matematika', phone: '081234567800', status: 'active', average_rating: 4.5 },
        { id: 2, user: { name: 'Bu Sari Dewi', email: 'sari.d@edu.id' }, nip: '199002152015012001', subject: 'B. Indonesia', phone: '081234567801', status: 'active', average_rating: 4.8 },
    ];

    // Safely extract data from paginated or raw array
    const rawStudents = students?.data || students || dummyStudents;
    const rawTeachers = teachers?.data || teachers || dummyTeachers;

    // Normalize student data: handle both API shape and dummy shape
    const studentItems = (Array.isArray(rawStudents) ? rawStudents : []).map(s => ({
        id: s.id,
        name: s.user?.name || s.name || '-',
        email: s.user?.email || s.email || '-',
        nisn: s.nisn || '-',
        nis: s.nis || '-',
        classroom: typeof s.classroom === 'string' ? s.classroom : (s.classroom?.name || '-'),
        gender: s.gender || '-',
        phone: s.phone || s.user?.phone || '-',
        status: s.status || 'active',
    }));

    const teacherItems = (Array.isArray(rawTeachers) ? rawTeachers : []).map(t => ({
        id: t.id,
        name: t.user?.name || t.name || '-',
        email: t.user?.email || t.email || '-',
        nip: t.nip || '-',
        subject: t.subject || '-',
        phone: t.phone || t.user?.phone || '-',
        status: t.status || 'active',
        average_rating: t.average_rating || 0,
    }));

    const filteredStudents = studentItems.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.nis.includes(search));
    const filteredTeachers = teacherItems.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.nip.includes(search));

    return (
        <DashboardLayout headerTitle="Data Pegawai & Murid">
            <Head title="Master Data" />
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center"><svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Data Pegawai & Murid</h2><p className="text-sm text-gray-500">Kelola data master siswa dan guru sekolah.</p></div>
                    </div>
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Tambah Data</button>
                </div>

                {/* Tabs + Search */}
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="flex bg-white p-1 rounded-xl border border-gray-100 shrink-0">
                        {[{ key: 'students', label: `Murid (${studentItems.length})` }, { key: 'teachers', label: `Guru (${teacherItems.length})` }].map(t => (
                            <button key={t.key} onClick={() => setTab(t.key)} className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${tab === t.key ? 'bg-primary-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}>{t.label}</button>
                        ))}
                    </div>
                    <div className="relative flex-1 w-full sm:w-auto">
                        <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder={`Cari ${tab === 'students' ? 'siswa' : 'guru'}...`} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-gray-400" />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        {tab === 'students' ? (
                            <table className="w-full">
                                <thead><tr className="bg-gray-50">
                                    {['Nama','NIS','NISN','Kelas','JK','Status','Aksi'].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>)}
                                </tr></thead>
                                <tbody>
                                    {filteredStudents.length === 0 ? (
                                        <tr><td colSpan={7} className="px-5 py-12 text-center text-sm text-gray-400">Tidak ada data siswa ditemukan.</td></tr>
                                    ) : filteredStudents.map(s => (
                                        <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer" onClick={() => setDetailItem({ ...s, _type: 'student' })}>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=2563eb&color=ffffff&size=32`} className="w-8 h-8 rounded-full" alt="" />
                                                    <div><p className="text-sm font-medium text-gray-900">{s.name}</p><p className="text-xs text-gray-400">{s.email}</p></div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600 font-mono">{s.nis}</td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600 font-mono">{s.nisn}</td>
                                            <td className="px-5 py-3.5"><span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">{s.classroom}</span></td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600">{s.gender === 'L' ? 'Laki-laki' : s.gender === 'P' ? 'Perempuan' : '-'}</td>
                                            <td className="px-5 py-3.5"><span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${s.status === 'active' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-100 text-gray-500'}`}>{s.status === 'active' ? 'Aktif' : 'Nonaktif'}</span></td>
                                            <td className="px-5 py-3.5 text-right space-x-2">
                                                <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition" onClick={e => { e.stopPropagation(); }}>Edit</button>
                                                <button className="px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition" onClick={e => { e.stopPropagation(); }}>Hapus</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <table className="w-full">
                                <thead><tr className="bg-gray-50">
                                    {['Nama','NIP','Mata Pelajaran','Rating','Status','Aksi'].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>)}
                                </tr></thead>
                                <tbody>
                                    {filteredTeachers.length === 0 ? (
                                        <tr><td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">Tidak ada data guru ditemukan.</td></tr>
                                    ) : filteredTeachers.map(t => (
                                        <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer" onClick={() => setDetailItem({ ...t, _type: 'teacher' })}>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1d4ed8&color=ffffff&size=32`} className="w-8 h-8 rounded-full" alt="" />
                                                    <div><p className="text-sm font-medium text-gray-900">{t.name}</p><p className="text-xs text-gray-400">{t.email}</p></div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600 font-mono">{t.nip}</td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600">{t.subject}</td>
                                            <td className="px-5 py-3.5"><span className="text-xs font-semibold text-amber-600">⭐ {t.average_rating}</span></td>
                                            <td className="px-5 py-3.5"><span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${t.status === 'active' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-100 text-gray-500'}`}>{t.status === 'active' ? 'Aktif' : 'Nonaktif'}</span></td>
                                            <td className="px-5 py-3.5 text-right space-x-2">
                                                <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition" onClick={e => { e.stopPropagation(); }}>Edit</button>
                                                <button className="px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition" onClick={e => { e.stopPropagation(); }}>Hapus</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {detailItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setDetailItem(null)}>
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"><h3 className="text-base font-semibold text-gray-900">Detail {detailItem._type === 'student' ? 'Siswa' : 'Guru'}</h3><button onClick={() => setDetailItem(null)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                        <div className="px-6 py-5 space-y-4">
                            <div className="flex items-center gap-4">
                                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(detailItem.name)}&background=2563eb&color=fff&bold=true&size=56`} className="w-14 h-14 rounded-2xl" alt="" />
                                <div><h2 className="text-lg font-semibold text-gray-900">{detailItem.name}</h2><p className="text-xs text-gray-400">{detailItem.email}</p></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {(detailItem._type === 'student' ? [
                                    { l: 'NIS', v: detailItem.nis }, { l: 'NISN', v: detailItem.nisn }, { l: 'Kelas', v: detailItem.classroom }, { l: 'Jenis Kelamin', v: detailItem.gender === 'L' ? 'Laki-laki' : detailItem.gender === 'P' ? 'Perempuan' : '-' },
                                ] : [
                                    { l: 'NIP', v: detailItem.nip }, { l: 'Mata Pelajaran', v: detailItem.subject }, { l: 'Rating', v: `⭐ ${detailItem.average_rating}` }, { l: 'Telepon', v: detailItem.phone },
                                ]).map((info, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100"><p className="text-[10px] text-gray-400 uppercase mb-1">{info.l}</p><p className="text-sm font-semibold text-gray-900">{info.v}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end"><button onClick={() => setDetailItem(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Tutup</button></div>
                    </div>
                </div>
            )}

            {/* Add Modal */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={`Tambah ${tab === 'students' ? 'Murid' : 'Guru'} Baru`}>
                <form className="p-6 space-y-4" onSubmit={e => { e.preventDefault(); setModalOpen(false); if (window.AppAlert) window.AppAlert.toast('success', 'Data berhasil ditambahkan!'); }}>
                    <div className="space-y-1.5"><label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Nama Lengkap</label><input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" placeholder="Masukkan nama..." required /></div>
                    <div className="space-y-1.5"><label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">{tab === 'students' ? 'NIS' : 'NIP'}</label><input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all" placeholder={tab === 'students' ? 'Nomor Induk Siswa' : 'Nomor Induk Pegawai'} required /></div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">Batal</button>
                        <button type="submit" className="px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Simpan</button>
                    </div>
                </form>
            </Modal>
        </DashboardLayout>
    );
}
