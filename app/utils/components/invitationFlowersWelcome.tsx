import "./style/invitationFlowersWelcome.scss";
import router, { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import Image from "next/image";

//TODO: fix flowers invitation
const InvitationFlowersWelcome = () => {
  return (
    <>
      <section className="flowers-welcome-bg">
        <article className="flowers-welcome-container">
          <Image
            className="flowers-bg-desktop"
            src="/invitation-flowers-desktop.png"
            width={650}
            height={500}
            alt="Flowers frame Design"
            priority={true}
            placeholder="empty"
          />

          <ReactSVG className="invitation-envelope" src="/svgs/invitation-envelope.svg" />
          <div className="flowers-wrapper">
            <h1 className="flowers-header">
              Welcome to <br className="flowers-br" />
              {"event.eventName"}
            </h1>
            <p className="flowers-sub-header">{"event.eventDate"}</p>
            <p className="flowers-welcome-text">A special invitation to:</p>
            <article className="flowers-invited-guests">
              <span className="flowers-span">
                <p className="flowers-invited-guestname"> {"event.guestList[0].name"}</p>
                {/* {event.guestList[0].additionalGuest.name.length > 0 && (
                  <>
                    <p className="flowers-additional-guest-prefix"> &</p>
                    <p className="flowers-additional-guestname">
                      {event.guestList[0].additionalGuest.name}
                    </p>
                  </>
                )} */}

                <p className="flowers-additional-guest-prefix">&</p>
                <p className="flowers-additional-guestname">Test 1</p>
              </span>
            </article>

            <div className="flowers-btn-container">
              <button
                className="flowers-next-btn"
                type="button"
                onClick={() => {
                  //   router.push(`/invitation/${event.id}/${event.eventName}`);
                }}
              >
                <ReactSVG
                  className="flowers-navigation-arrow"
                  src="/svgs/arrow.svg"
                  aria-label="Next page of invitation"
                ></ReactSVG>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default InvitationFlowersWelcome;
