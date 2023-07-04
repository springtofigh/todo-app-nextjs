import Layout from "../containers/Layout"
import { useSession , getSession } from "next-auth/react"



const todos = () => {
    const { datat: session , status } = useSession();
    console.log(session);
  return (
    <Layout>
        <h1 className="text-slate-100">
        {session.user.name},
          سلام
        خوش اومدی
        </h1>
    </Layout>
  )
}

export default todos;


export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin?callbackUrl=http://http://localhost:3000/todos',
          permanent: false,
        },
      }
    }

    return {
      props: {
        session,
      },
    }
  }