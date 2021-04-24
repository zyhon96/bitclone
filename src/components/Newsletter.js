import React from 'react'

function Newsletter() {
    return (
        <div className="newsletter">
            <div className="texttt">
                <h1>Suscribe to our newsletter</h1>
            </div>
            <div className="input">
                <form>
                    <input className="text-submit" type="text" name="email" required="Email" />
                    <input className="submit" type="submit" value="JOIN US" />
                </form>
            </div>
        </div>
    )
}

export default Newsletter
