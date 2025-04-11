const Main = () => {
    return (
        <>
            <section
                className="hero-section border"
                style={{
                    background: 'url("./img/main.png") no-repeat center center',
                    backgroundSize: 'cover',
                    minHeight: '70vh',
                    maxWidth: '100%',
                    position: 'relative',
                }}
            >
                <a href="/doctors" className="btns schedule-btn">
                    Розклад прийому
                </a>
            </section>
        </>
    );
}

export default Main;
