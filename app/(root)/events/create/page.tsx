import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  console.log('CreateEvent')
  // const { sessionClaims } = auth();
  // const userId = sessionClaims?.userId as string;
  const { userId } : { userId: string | null } = auth();

  // console.log('CreateEvent -> sessionClaims', sessionClaims)
  console.log('CreateEvent -> userId', userId)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        {/* createEvent is parent component 父传子，把userid绑定过 来*/}
        <EventForm userId={userId!} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent
