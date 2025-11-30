import React, { useMemo, useRef, useState } from "react";

type RequestItem = {
    id: number;
    filename: string;
    operation: string;
    time: string; // hh:mm
    date: string; // yyyy-mm-dd
    approved?: boolean | null;
};

const ProfilePage: React.FC = () => {
    // profile (top area)
    const profile = {
        name: "User Name",
        role: "Employee",
        email: "user_something@mail.com",
    };

    // dummy requests
    const [requests, setRequests] = useState<RequestItem[]>([
        {
            id: 1,
            filename: "monthly_report_nov.pdf",
            operation: "Upload",
            time: "09:12",
            date: "2025-11-01",
            approved: null,
        },
        {
            id: 2,
            filename: "project_plan_v2.docx",
            operation: "Edit",
            time: "14:42",
            date: "2025-11-03",
            approved: null,
        },
    ]);

    // Search state
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    // Filter by filename (case-insensitive)
    const filtered = useMemo(() => {
        const s = searchTerm.trim().toLowerCase();
        if (!s) return requests;
        return requests.filter((r) => r.filename.toLowerCase().includes(s));
    }, [requests, searchTerm]);

    // grid template columns
    const gridCols = { gridTemplateColumns: "90px 1fr 140px 110px 120px" };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#222] p-4 select-none">
                <div className="text-4xl font-extrabold tracking-tight">DKMS</div>

                <div className="flex items-center space-x-3">
                    {/* Home pill (green) */}
                    <div className="rounded-full bg-main opacity-70 px-4 py-2 text-black flex items-center space-x-2 select-none">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                            <path d="M4 11.5L12 4l8 7.5" />
                            <path d="M6 11v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8" />
                        </svg>

                        <span className="font-medium">Home</span>
                    </div>

                    {/* small red circle icon */}
                    <div className="h-10 w-10 rounded-full bg-[#b91c1c] flex items-center justify-center">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main area */}
            <div className="flex-1 overflow-hidden p-6">
                <div className="bg-[#1a1a1a] h-full w-full rounded-md border border-[#222] flex flex-col">
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
                            <div className="rounded-full bg-main opacity-70 px-4 py-3 text-center text-black font-medium">sr no.</div>

                            {/* Filename pill with always-visible search input + search button */}
                            <div className="relative flex items-center">
                                <div className="flex-1 rounded-full bg-main opacity-70 px-4 py-2 text-black font-medium flex items-center justify-between">
                                    <span className="pl-2">File name</span>

                                    {/* container for visible search input and buttons (inside the pill) */}
                                    <div className="ml-4 flex items-center space-x-2">
                                        <div className="relative">
                                            <input
                                                ref={searchInputRef}
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search by filename..."
                                                className="h-9 w-64 bg-white/10 placeholder:text-white/70 text-white px-3 rounded-full outline-none"
                                            />
                                            {/* Clear button: visible only when there's content */}
                                            {searchTerm.length > 0 && (
                                                <button
                                                    onClick={() => {
                                                        setSearchTerm("");
                                                        searchInputRef.current?.focus();
                                                    }}
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 h-6 w-6 flex items-center justify-center rounded-full bg-white/10 text-white"
                                                    aria-label="clear search"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>

                                        {/* Search button — focuses input (and user types to filter); kept as a working dummy */}
                                        <button
                                            onClick={() => searchInputRef.current?.focus()}
                                            className="h-9 px-3 rounded-full bg-main opacity-70 text-black font-medium border border-black/10"
                                            aria-label="search button"
                                            title="Focus search"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-main opacity-70 px-4 py-2 text-center text-black font-medium">Operation</div>
                            <div className="rounded-full bg-main opacity-70 px-4 py-2 text-center text-black font-medium">Time</div>
                            <div className="rounded-full bg-main opacity-70 px-4 py-2 text-center text-black font-medium">Date</div>
                        </div>
                    </div>

                    {/* Table rows area: take remaining vertical space and scroll */}
                    <div className="flex-1 overflow-auto px-6 py-4">
                        {filtered.length === 0 ? (
                            <div className="text-gray-400 py-8 text-center">No records found.</div>
                        ) : (
                            <div className="space-y-3">
                                {filtered.map((r, idx) => (
                                    <div key={r.id} className="grid items-center gap-4 py-3" style={gridCols}>
                                        {/* sr no */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-3 text-center">{idx + 1}</div>

                                        {/* filename - wide */}
                                        <div>
                                            <div className="bg-[#2a2a2a] text-left py-3 px-4 rounded-full text-lg truncate">
                                                {r.filename}
                                            </div>
                                        </div>

                                        {/* operation */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-center">{r.operation}</div>

                                        {/* time */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-center">{r.time}</div>

                                        {/* date */}
                                        <div className="rounded-full bg-[#2a2a2a] px-4 py-2 text-center">{r.date}</div>
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

export default ProfilePage;
