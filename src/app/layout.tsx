import "./globals.css";
import React from "react";
import Header from "@/components/main/header/header";
import { Metadata } from "next";
import ThemeProvider from "@/components/main/provider/theme_provider";
import AnalyticsProvider from "@/components/main/provider/analytics_provider";

export const metadata: Metadata = {
    title: "석동중 디데이",
    description: "석동중학교 학생들을 위한 디데이 사이트입니다.",
    applicationName: "석동중학교 라이브 디데이 카운터",
    authors: [{ name: "AlphaKR93", url: "https://alpha93.kr/" }],
    keywords: ["석동중", "석동중 디데이", "석동중 시험", "석동중 고사", "석동중 일정", "석동중 디데이", "석동중 행사"],
    creator: "AlphaKR93",
    publisher: "AlphaKR93",
    verification: { other: { "naver-site-verification": "c070ebcbedf1956dadcd0fa3f6c4207d16d21856" } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className="font-escore">
                <ThemeProvider>
                    <Header />
                    {children}
                    <div className="unsupported-size">
                        <p>본 사이트에서</p>
                        <p>지원하지 않는</p>
                        <p>화면 크기입니다.</p>
                    </div>
                </ThemeProvider>
                <AnalyticsProvider />
            </body>
        </html>
    );
}
