const Main = () => {
    return(
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
                <a
                    href="#schedule"
                    className="btns"
                    style={{
                    position: 'absolute',
                    top: '50px',  
                    left: '20px', 
                    }}
                >
                    Розклад прийому
                </a>
            </section>
        </>
    );
}

export default Main;