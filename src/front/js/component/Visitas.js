import React from "react";

const Visitas = (props) => {
    return (
        <>
            <div className="sectiontitle">
                <p className="nospace font-xs">Id erat duis nibh diam at</p>
                <h6 className="heading">Vulputate quis lacus nullam</h6>
            </div>
            <ul id="stats" className="nospace group">
                <li>
                    <i className="fas fa-id-badge" />
                    <p>
                        <a href="#">123</a>
                    </p>
                    <p>Augue dui convallis</p>
                </li>
                <li>
                    <i className="fas fa-skull" />
                    <p>
                        <a href="#">1234</a>
                    </p>
                    <p>Id ullamcorper</p>
                </li>
                <li>
                    <i className="fas fa-umbrella" />
                    <p>
                        <a href="#">12345</a>
                    </p>
                    <p>Malesuada interdum</p>
                </li>
                <li>
                    <i className="fas fa-store-alt" />
                    <p>
                        <a href="#">6789</a>
                    </p>
                    <p>Tristique viverra</p>
                </li>
            </ul>
        </>
    );
};

export default Visitas;