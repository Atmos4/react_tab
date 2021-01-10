import "./activeTabEffect.css"

interface ActiveTabEffectProps {
    index: number;
    count: number;
}

const ActiveTabEffect = ({index,count}: ActiveTabEffectProps) => {
    const left = (index/count)*100;
    const width = (1/count)*100;

    const activeStyle = {
        left: left+"%",
        width: width+"%"
    }

    return(
        <div className={"active-tab-visual"} style={activeStyle}></div>
    )
}

export default ActiveTabEffect