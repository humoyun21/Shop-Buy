//================ Card Grid =========================

import "./style.scss"

const index = (props) => {
    return (
        <div className="grid grid-cols-4 gap-14  px-10">
            {
                props.children
            }
        </div>
    );
}

export default index;