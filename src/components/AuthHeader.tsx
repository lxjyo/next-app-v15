import { signOut, signIn, auth } from '@/auth'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

function SignIn({
  provider,
  ...props
}: { provider: string } & ButtonProps) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  )
}

function SignOut(props: ButtonProps) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button {...props}>
        Sign Out
      </button>
    </form>
  )
}

export default async function AuthHeader() {
  const session = await auth();
  return (
    <header className="flex justify-end">
      {session?.user ? (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{session.user.name}</span>
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </header>
  );
}