const Contact = () => {
  return (
    <section className="pt-40 md:pt-32 sm:pt-28 xsm:pt-[8rem]">
      <h2 className="text-5xl xsm:text-3xl font-semibold mb-20 xsm:mb-14 capitalize text-center">
        Feel Free to Contact me
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9467443657777!2d88.85398591532717!3d22.65577413562123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff557dadfa4e19%3A0xb7e953b94015ffcb!2sCONFIDENT%20WINGS%20(%20Spoken%20English%20institute%20)!5e0!3m2!1sen!2sin!4v1671454956694!5m2!1sen!2sin"
        // width="100%"
        // height="400"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        id="google"
        title="google"
        className="w-full lg:h-[26rem] xsm:h-72"
      ></iframe>

      <div className="mt-24 text-center">
        <div className="contact-form max-w-[50rem] lg:m-auto md:mx-8 xsm:mx-8">
          <form
            action="https://formspree.io/f/xzbqprpl"
            method="POST"
            className="contact-inputs flex flex-col gap-12 xsm:gap-10 "
          >
            <input
              type="text"
              name="username"
              placeholder="usename"
              autoComplete="off"
              required
              className="border-none outline-none h-full w-full px-3 py-2 text-xs font-medium ring-1 uppercase"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="border-none outline-none h-full w-full px-3 py-2 text-xs font-medium ring-1 uppercase"
            />
            <textarea
              name="message"
              cols={30}
              rows={6}
              autoComplete="off"
              required
              placeholder="Description"
              className="border-none outline-none h-full w-full px-3 py-2 text-xs font-medium ring-1 uppercase"
            ></textarea>

            <input
              type="submit"
              value="send"
              className="cursor-pointer transition-all duration-150 p-2 hover:scale-[.98] bg-indigo-500 text-white hover:bg-white hover: ring-2 border-indigo-500 hover:text-indigo-600"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
