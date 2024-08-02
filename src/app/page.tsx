import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="top">
        <Header />
        <div>Main - Section</div>
      </section>
      <section>categories</section>
      <section>features</section>
    </main>
  );
}
