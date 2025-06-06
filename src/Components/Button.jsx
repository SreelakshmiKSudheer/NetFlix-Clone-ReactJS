export default function Button(props) {
    return (
        <button
            type={props.btnType}
            className="bg-[#e60914] text-white border-none px-[2vw] py-[1vh] rounded-[0.5vw] font-bold text-md hover:bg-[#ae0710]"
        >
            {props.text}
        </button>
    );
}
