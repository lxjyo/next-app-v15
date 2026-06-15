'use client';
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const theme = useTheme();
  return (
    <header>
      <h1>这是一个Header组件，当前主题是 {theme}</h1>
    </header>
  );
}