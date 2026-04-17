import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Modal from '@/Components/ui/Modal';

export default function StudentEvaluation({ evaluations }) {
    const [selectedClass, setSelectedClass] = useState('all');
    const [detailStudent, setDetailStudent] = useState(null);

    const classes = ['X RPL 1', 'X RPL 2', 'XI RPL 1', 'XI RPL 2'];
    const dummyStudents = [
        { id: 1, name: 'Kadek Dimas Pratama', nis: '25001', class: 'X RPL 1', attendance: 95, avg_score: 87, tasks_completed: 12, tasks_total: 14, behavior: 'Baik' },
        { id: 2, name: 'Ni Wayan Ayu Putri', nis: '25002', class: 'X RPL 1', attendance: 98, avg_score: 92, tasks_completed: 14, tasks_total: 14, behavior: 'Sangat Baik' },
        { id: 3, name: 'I Gede Arka Wijaya', nis: '25003', class: 'X RPL 2', attendance: 82, avg_score: 71, tasks_completed: 9, tasks_total: 14, behavior: 'Cukup' },
        { id: 4, name: 'Putu Ayu Lestari', nis: '25004', class: 'XI RPL 1', attendance: 91, avg_score: 85, tasks_completed: 11, tasks_total: 14, behavior: 'Baik' },
        { id: 5, name: 'Made Surya Dharma', nis: '25005', class: 'XI RPL 2', attendance: 78, avg_score: 65, tasks_completed: 7, tasks_total: 14, behavior: 'Perlu Perhatian' },
    ];

    const filtered = selectedClass === 'all' ? dummyStudents : dummyStudents.filter(s => s.class === selectedClass);

    const behaviorStyle = (b) => {
        const m = { 'Sangat Baik': 'bg-green-50 text-green-600 border-green-100', 'Baik': 'bg-blue-50 text-blue-600 border-blue-100', 'Cukup': 'bg-amber-50 text-amber-600 border-amber-100', 'Perlu Perhatian': 'bg-red-50 text-red-600 border-red-100' };
        return m[b] || m['Cukup'];
    };

    return (
        <DashboardLayout headerTitle="Evaluasi Siswa">
            <Head title="Evaluasi Siswa" />
            <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center"><svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></div>
                        <div><h2 className="text-lg font-semibold text-gray-900">Evaluasi Siswa</h2><p className="text-sm text-gray-500">Pantau kehadiran, nilai, dan perilaku siswa Anda.</p></div>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 shrink-0 overflow-x-auto">
                        <button onClick={() => setSelectedClass('all')} className={`px-3 py-2 rounded-lg text-xs font-medium transition ${selectedClass === 'all' ? 'bg-primary-500 text-white' : 'text-gray-500'}`}>Semua</button>
                        {classes.map(c => <button key={c} onClick={() => setSelectedClass(c)} className={`px-3 py-2 rounded-lg text-xs font-medium transition whitespace-nowrap ${selectedClass === c ? 'bg-primary-500 text-white' : 'text-gray-500'}`}>{c}</button>)}
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Total Siswa', value: filtered.length, color: 'bg-blue-50', icon: 'text-blue-600' },
                        { label: 'Rata-rata Nilai', value: filtered.length > 0 ? Math.round(filtered.reduce((a, s) => a + s.avg_score, 0) / filtered.length) : 0, color: 'bg-green-50', icon: 'text-green-600' },
                        { label: 'Kehadiran', value: filtered.length > 0 ? Math.round(filtered.reduce((a, s) => a + s.attendance, 0) / filtered.length) + '%' : '0%', color: 'bg-amber-50', icon: 'text-amber-600' },
                        { label: 'Tugas Selesai', value: filtered.reduce((a, s) => a + s.tasks_completed, 0) + '/' + filtered.reduce((a, s) => a + s.tasks_total, 0), color: 'bg-purple-50', icon: 'text-purple-600' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4">
                            <p className="text-xs font-medium text-gray-400 mb-1">{stat.label}</p>
                            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Student Table */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead><tr className="bg-gray-50">
                                {['Siswa', 'NIS', 'Kelas', 'Kehadiran', 'Rata-rata', 'Tugas', 'Perilaku', 'Aksi'].map(h => <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>)}
                            </tr></thead>
                            <tbody>
                                {filtered.map(s => (
                                    <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{s.name}</td>
                                        <td className="px-5 py-3.5 text-xs text-gray-500">{s.nis}</td>
                                        <td className="px-5 py-3.5"><span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{s.class}</span></td>
                                        <td className="px-5 py-3.5"><span className={`text-xs font-semibold ${s.attendance >= 90 ? 'text-green-600' : s.attendance >= 80 ? 'text-amber-600' : 'text-red-600'}`}>{s.attendance}%</span></td>
                                        <td className="px-5 py-3.5 text-sm font-semibold text-gray-900">{s.avg_score}</td>
                                        <td className="px-5 py-3.5 text-xs text-gray-500">{s.tasks_completed}/{s.tasks_total}</td>
                                        <td className="px-5 py-3.5"><span className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${behaviorStyle(s.behavior)}`}>{s.behavior}</span></td>
                                        <td className="px-5 py-3.5"><button onClick={() => setDetailStudent(s)} className="text-xs font-medium text-primary-500 hover:text-primary-600">Detail</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            <Modal open={!!detailStudent} onClose={() => setDetailStudent(null)} title="Detail Evaluasi Siswa">
                {detailStudent && (
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <img src={`https://ui-avatars.com/api/?name=${detailStudent.name}&background=2563eb&color=fff&bold=true&size=48`} className="w-12 h-12 rounded-xl" alt="" />
                            <div><h3 className="text-base font-semibold text-gray-900">{detailStudent.name}</h3><p className="text-xs text-gray-400">NIS: {detailStudent.nis} · {detailStudent.class}</p></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[{ label: 'Kehadiran', value: detailStudent.attendance + '%' }, { label: 'Rata-rata Nilai', value: detailStudent.avg_score }, { label: 'Tugas', value: detailStudent.tasks_completed + '/' + detailStudent.tasks_total }, { label: 'Perilaku', value: detailStudent.behavior }].map((info, i) => (
                                <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100"><p className="text-[10px] font-medium text-gray-400 uppercase mb-1">{info.label}</p><p className="text-sm font-semibold text-gray-900">{info.value}</p></div>
                            ))}
                        </div>
                        <div className="flex justify-end"><button onClick={() => setDetailStudent(null)} className="px-5 py-2 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition">Tutup</button></div>
                    </div>
                )}
            </Modal>
        </DashboardLayout>
    );
}
