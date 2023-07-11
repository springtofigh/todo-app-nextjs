import Layout from "@/containers/Layout";
import { useSession , signIn } from "next-auth/react";
import Loader from "../../shared/Loader";

const Profile = () => {
  const { data: session , status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn()
    },
  })

  if (status === "loading") {
    return (
      <Layout>
        <Loader/>
      </Layout>
    )    
  }
  return (
    <Layout>
        <h1 className="text-slate-100 text-center">
        {session.user.name},
          سلام
          به پروفایلت خوش اومدی
        </h1>
    </Layout>
  )
}

export default Profile