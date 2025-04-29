const Main = () => {
    return (
        <>
        <div className="container">
            <section
                className="hero-section"
                style={{
                    background: 'url("./img/main.png") no-repeat center center',
                    backgroundSize: "cover",
                    minHeight: "678px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
        
                <a href="/doctors" className="btns schedule-btn">
                    Розклад прийому
                </a>
            </section>
            </div>
        </>
    );
}

export default Main;
