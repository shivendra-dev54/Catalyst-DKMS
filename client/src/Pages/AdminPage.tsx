import React, { useMemo, useRef, useState } from "react";

type RequestItem = {
    id: number;
    email: string;
    time: string; // hh:mm
    date: string; // yyyy-mm-dd
    approved?: boolean | null;
};

const AdminPage: React.FC = () => {
    const profile = {
        name: "Yellow cat",
        role: "Admin",
        email: "yellow_cat@meow.com",
    };

    const [requests, setRequests] = useState<RequestItem[]>([
        {
            id: 1,
            email: "alice@example.com",
            time: "09:12",
            date: "2025-11-01",
            approved: null,
        },
        {
            id: 2,
            email: "bob.smith@mail.com",
            time: "14:42",
            date: "2025-11-03",
            approved: null,
        },
    ]);

    // Search state
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    // Filtered list
    const filtered = useMemo(() => {
        const s = searchTerm.trim().toLowerCase();
        if (!s) return requests;
        return requests.filter((r) => r.email.toLowerCase().includes(s));
    }, [requests, searchTerm]);

    // Approve / Reject handlers
    const handleApprove = (id: number) =>
        setRequests((prev) => prev.map((p) => (p.id === id ? { ...p, approved: true } : p)));
    const handleReject = (id: number) =>
        setRequests((prev) => prev.map((p) => (p.id === id ? { ...p, approved: false } : p)));

    // grid template columns
    const gridCols = { gridTemplateColumns: "90px 1fr 120px 150px 150px" };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#222] p-4 select-none">
                <div className="text-4xl font-extrabold tracking-tight">DKMS</div>
                <div className="h-10 w-10 rounded-full bg-[#b91c1c] flex items-center justify-center">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Main area */}
            <div className="flex-1 overflow-hidden p-6">
                <div className="h-full w-full rounded-mdflex flex-col">
                    {/* Profile center */}
                    <div className="flex flex-col items-center py-8 px-6">
                        <div className="h-40 w-40 rounded-full bg-[#7fb03a] flex items-center justify-center border-2 border-[#333] mb-4">
                            <svg className="h-24 w-24 text-[#09210a]" viewBox="0 0 24 24" fill="none" stroke="#09210a" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="3.2" />
                                <path d="M6 20c.5-4 4-6 6-6s5.5 2 6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-semibold">{profile.name}</h2>
                        <div className="text-sm text-gray-300 mt-1">{profile.role}</div>
                        <div className="text-gray-400 mt-2">{profile.email}</div>
                    </div>

                    {/* Table header pills */}
                    <div className="px-6 select-none">
                        <div className="grid items-center gap-4" style={gridCols}>
                            <div className="rounded-full bg-main px-4 py-3 opacity-70 text-center text-black font-medium">sr no.</div>

                            {/* User email pill */}
                            <div className="relative flex items-center">
                                <div className="flex-1 rounded-full bg-main opacity-70 px-4 py-2 text-black font-medium flex items-center justify-between">
                                    <span className="pl-2">User email</span>

                                    {/* search input */}
                                    <div className="ml-4 flex items-center space-x-2">
                                        <div className="relative">
                                            <input
                                                ref={searchInputRef}
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search by email..."
                                                className="h-9 w-64 bg-[#59c288] placeholder:text-black/70 text-black px-3 rounded-full outline-none"
                                            />
                                            {/* Clear button: visible only when there's content */}
                                            {searchTerm.length > 0 && (
                                                <button
                                                    onClick={() => {
                                                        setSearchTerm("");
                                                        searchInputRef.current?.focus();
                                                    }}
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 h-6 w-6 flex items-center justify-center rounded-full bg-[#47a320] text-black"
                                                    aria-label="clear search"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>

                                        {/* Dummy Search button — focuses input and leaves filtering to typing */}
                                        <button
                                            onClick={() => searchInputRef.current?.focus()}
                                            className="h-9 px-3 rounded-full bg-[#75e645] text-black font-medium border border-[#47a320]"
                                            aria-label="search button"
                                            title="Focus search"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-main px-4 py-2 opacity-70 text-center text-black font-medium">Time</div>
                            <div className="rounded-full bg-main px-4 py-2 opacity-70 text-center text-black font-medium">Date</div>
                            <div className="rounded-full bg-main px-4 py-2 opacity-70 text-center text-black font-medium">Approval</div>
                        </div>
                    </div>

                    {/* Table rows area: take remaining vertical space and scroll */}
                    <div className="flex-1 overflow-auto px-6 py-4">
                        {filtered.length === 0 ? (
                            <div className="text-gray-400 py-8 text-center">No requests found.</div>
                        ) : (
                            <div className="space-y-3">
                                {filtered.map((r, idx) => (
                                    <div key={r.id} className="grid items-center gap-4 py-3" style={gridCols}>
                                        {/* sr no */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-3 text-center">{idx + 1}</div>

                                        {/* email - wide */}
                                        <div>
                                            <div className="bg-[#2a2a2a] text-left py-3 px-4 rounded-full text-lg truncate">
                                                {r.email}
                                            </div>
                                        </div>

                                        {/* time */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-center">{r.time}</div>

                                        {/* date */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-center">{r.date}</div>

                                        {/* approval pills */}
                                        <div className="flex items-center justify-center space-x-3">
                                            <button
                                                onClick={() => handleApprove(r.id)}
                                                className={`h-8 w-14 rounded-full flex items-center justify-center ${r.approved === true ? "bg-[#059669]" : "bg-[#0b6c17]"
                                                    }`}
                                                title="Approve"
                                            >
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={() => handleReject(r.id)}
                                                className={`h-8 w-8 rounded-full flex items-center justify-center ${r.approved === false ? "bg-[#dc2626]" : "bg-[#7a1b1b]"
                                                    }`}
                                                title="Reject"
                                            >
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="py-4 text-sm text-gray-400 text-center border-t border-[#111] select-none">
                        Copyright © 2025 Catalysts, All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
