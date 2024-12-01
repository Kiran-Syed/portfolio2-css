

export default function Contact(){

    return(

        <div>

        <div className="main-form ">

                    <form action="/" className="form">

                        <div >
                            <label htmlFor="name" className="label"> Name </label> <br />
                            <input type="text" name="username" placeholder=" Name" required className=" input" />
                            <br />
                        </div>

                        <div>
                            <label htmlFor="email" className="label" id="label"> Email </label> <br />
                            <input type="text" name="email" placeholder=" Email" required className="input" />
                        </div>

                        <div>
                            <p className="label"> Message </p>
                            <textarea name="messeage" id="message" placeholder=" Message" className="input"></textarea>
                        </div>

                        <button id="btn">Send Message</button>

                    </form>
                </div>
        </div>
    )
}