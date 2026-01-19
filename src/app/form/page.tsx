import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/actions/milestones";
import { getUser } from "@/lib/actions/auth";
import { MilestoneForm } from "@/components/organism/milestone-form";

/**
 * Halaman form untuk membuat milestone baru
 * DILINDUNGI: Hanya admin yang bisa mengakses
 */
export default async function FormPage() {
  // Verifikasi user terautentikasi
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  // Verifikasi user adalah admin
  const adminStatus = await isAdmin();
  if (!adminStatus) {
    redirect("/?error=unauthorized");
  }

  return (
    <div className="pb-[8%] min-h-screen bg-background">
      <main className="flex flex-col gap-8 p-4 sm:p-6 max-w-2xl mx-auto min-h-screen pb-24">
        <div className="mt-3">
          <h1 className="font-bold text-2xl sm:text-3xl text-center">
            Tambah Milestone Baru
          </h1>
          <p className="text-center text-sm sm:text-base text-muted-foreground mt-2">
            Isi form di bawah untuk menambahkan milestone
          </p>
        </div>
        <MilestoneForm />
      </main>
    </div>
  );
}
