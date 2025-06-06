export default function Hero(props) {
    return (
        <section
            className="flex flex-col justify-center items-center h-[80vh] bg-cover bg-center rounded-[2vw] px-[15vw] py-[5vh] gap-[1vw]"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <h1 className="font-bold text-6xl text-white text-center">{props.h1Text}</h1>
            <h3 className="text-white text-center">{props.h3Text}</h3>
            <p className="text-white text-center mt-[1vh]">{props.pText}</p>
        </section>
    );
}
