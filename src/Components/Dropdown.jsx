
export default function Dropdown() {
    return(

            <select name="language" id="langDrop" className="appearance-none bg-black text-white font-bold text-base rounded-md px-[1vw] py-[1vh] border border-white" >
                <option value="en" defaultValue>English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="zh">Chinese</option>
                <option value="hi">Hindi</option>
            </select>
    )
}