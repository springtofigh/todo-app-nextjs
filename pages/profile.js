import Layout from "../containers/Layout";
import { useSession , signIn } from "next-auth/react";

const profile = () => {
  const { data: session , status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn()
    },
  })

  if (status === "loading") {
    return (
      <Layout>
      <div>
        ... در حال لود شدن
      </div>
    </Layout>
    )    
  }
  return (
    <Layout>
        <h1 className="text-slate-100">
        {session.user.name},
          سلام
          به پروفایلت خوش اومدی
        </h1>
    </Layout>
  )
}

export default profile