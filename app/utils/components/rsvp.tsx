const Rsvp = () => {
  //   const handleRsvp = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log("RSVP CLICK!!! ");
  //   };

  return (
    <>
      <section className="container-rsvp">
        {/* {guest.hasResponded ? (
          <h1 className="title-rsvp">Response Received</h1>
        ) : (
          <>
            <h1 className="title-rsvp">Attending?</h1>
            <p className="rsvp-latest">Kindly RSVP by 8th of March.</p>
          </>
        )} */}
        <form className="form-rsvp">
          <div className="guest-container">
            <div className="guest-name-container">
              <label className="guest-label" htmlFor="guest-name">
                Guest:
              </label>
              {/* {guest ? (
              <span className="guest-name">
                <b>
                  {guest.firstName} {guest.lastName}
                </b>
              </span>
            ) : (
              <input
                type="text"
                name="guest-name"
                placeholder="Guest name"
                required
              />
            )} */}
            </div>

            <div className="attending">
              <label htmlFor="attending">Attending:</label>
              <input
                type="radio"
                name="attending"
                value="true"
                //   disabled={guest.hasResponded}
                //   defaultChecked={guest.attending === guest.hasResponded}
              />
              <span className="checkbox-option">Yes</span>
              <input
                type="radio"
                name="attending"
                value="false"
                //   disabled={guest.hasResponded}
                //   defaultChecked={!guest.attending === guest.hasResponded}
              />
              <span className="checkbox-option">No</span>
            </div>

            <div className="phoneNumber">
              <label className="guest-label" htmlFor="phoneNumber">
                Phone:
              </label>
              <input
                className="text-input"
                type="text"
                name="phoneNumber"
                placeholder="07XX XXX XXX"
                //   disabled={guest.hasResponded}
                //   defaultValue={guest.phoneNumber ?? ""}
              />
            </div>

            <div className="email">
              <label className="guest-label" htmlFor="email">
                Email:
              </label>
              <input
                className="text-input"
                type="email"
                name="email"
                placeholder="name@example.com"
                //   disabled={guest.hasResponded}
                //   defaultValue={guest.email ?? ""}
              />
            </div>

            <div className="diet">
              <label htmlFor="diet">Diet:</label>
              <input
                type="radio"
                name="diet"
                value="meat"
                //   defaultChecked={guest.diet === "meat" || guest.diet === null}
                //   disabled={guest.hasResponded}
              />
              <span className="checkbox-option">Meat</span>
              <input
                type="radio"
                name="diet"
                value="vegetarian"
                //   defaultChecked={guest.diet === "vegetarian"}
                //   disabled={guest.hasResponded}
              />
              <span className="checkbox-option">Vegetarian</span>
              <input
                type="radio"
                name="diet"
                value="vegan"
                //   defaultChecked={guest.diet === "vegan"}
                //   disabled={guest.hasResponded}
              />
              <span className="checkbox-option">Vegan</span>
            </div>

            <div className="allergies">
              <label className="guest-label" htmlFor="allergies">
                Allergies:
              </label>
              <input
                className="text-input"
                type="text"
                name="allergies"
                placeholder="Allergies"
                //   defaultValue={guest.allergies ?? ""}
                //   disabled={guest.hasResponded}
                maxLength={24}
              />
            </div>

            <div className="comments">
              <label className="guest-label" htmlFor="comments">
                Info:
              </label>
              <input
                className="text-input"
                type="text"
                name="comments"
                placeholder="Additional info"
                //   defaultValue={guest.comments ?? ""}
                //   disabled={guest.hasResponded}
                maxLength={24}
              />
            </div>
          </div>
          {/* {guest &&
          guest.additionalGuests &&
          guest.additionalGuests[0].firstName.length > 0 && (
            <>
               {guest.additionalGuests.map((additionalGuest:any, index:number) => (
                <div key={index} className="additional-guest">
                  <div className="guest-name-container">
                    <label
                      className="guest-label"
                      htmlFor={`additional-guest-name-${index}`}
                    >
                      Guest:
                    </label>
                    <span>
                      <b>
                        {`${additionalGuest.firstName} ${additionalGuest.lastName}`}
                        <b />
                      </b>
                    </span>
                  </div>

                  <div className="attending">
                    <label
                      htmlFor={`additional-guest-attending-${index + 1}`}
                    >
                      Attending:
                    </label>
                    <input
                      type="radio"
                      id={`additional-guest-attending-${index + 1}`}
                      name={`additional-guest-attending-${index + 1}`}
                      value="true"
                    //   disabled={guest.hasResponded}
                      defaultChecked={additionalGuest.attending}
                    />
                    <span className="checkbox-option">Yes</span>
                    <input
                      type="radio"
                      id={`additional-guest-not-attending-${index + 1}`}
                      name={`additional-guest-attending-${index + 1}`}
                      value="false"
                    //   disabled={guest.hasResponded}
                      defaultChecked={!additionalGuest.attending}
                    />
                    <span className="checkbox-option">No</span>
                  </div>

                  <div className="diet">
                    <label
                      className="guest-label"
                      htmlFor={`additional-guest-diet-${index + 1}`}
                    >
                      Diet:
                    </label>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="meat"
                      defaultChecked={additionalGuest.diet === "meat"}
                    //   disabled={guest.hasResponded}
                    />
                    <span className="checkbox-option">Meat</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="vegetarian"
                    //   disabled={guest.hasResponded}
                      defaultChecked={additionalGuest.diet === "vegetarian"}
                    />
                    <span className="checkbox-option">Vegetarian</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="vegan"
                    //   disabled={guest.hasResponded}
                      defaultChecked={additionalGuest.diet === "vegan"}
                    />
                    <span className="checkbox-option">Vegan</span>
                  </div>

                  <div className="allergies">
                    <label
                      className="guest-label"
                      htmlFor={`additional-guest-allergies-${index + 1}`}
                    >
                      Allergies:
                    </label>
                    <input
                      className="text-input"
                      type="text"
                      name={`additional-guest-allergies-${index + 1}`}
                      placeholder="Allergies"
                    //   disabled={guest.hasResponded}
                      defaultValue={additionalGuest.allergies ?? ""}
                      maxLength={24}
                    />
                  </div>
                  <div className="comments">
                    <label
                      className="guest-label"
                      htmlFor={`additional-guest-comments-${index + 1}`}
                    >
                      Info:
                    </label>
                    <input
                      className="text-input"
                      type="text"
                      name={`additional-guest-comments-${index + 1}`}
                      placeholder="Additional info"
                    //   disabled={guest.hasResponded}
                      defaultValue={additionalGuest.comments ?? ""}
                      maxLength={24}
                    />
                  </div>
                </div>
              ))} 
            </>
          )} */}

          {/* {!guest.hasResponded && !loading ? (
          <div className="submit-btn-container">
            <button className="submit-btn" type="submit">
              Send
            </button>
          </div>
        ) : (
          <div className="loader-container">
            <PacmanLoader
              color="orange"
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )} */}
          {/* {loading && (
          <div className="loader-container">
            <PacmanLoader
              color="orange"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )} */}

          {/* {!guest.hasResponded && !loading && ( */}
          <div className="submit-btn-container">
            <button className="submit-btn" type="submit">
              Send
            </button>
          </div>
          {/* )} */}
        </form>
      </section>
    </>
  );
};

export default Rsvp;
