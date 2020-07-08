import React from "react";
import loginImg from "../../Login.gif";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                ref={this.inputRef}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button
                        style={{ marginTop: 78 + "px" }}
                        type="button"
                        className="btn"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}
