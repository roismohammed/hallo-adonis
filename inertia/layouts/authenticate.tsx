import { Fragment } from "react/jsx-runtime";

export default function Authenticated({children}){
    return(
        <Fragment>
            <div className="h-14 flex item-center justify-start bg-white border-b border-slate-500 px-8">
                <h1>Header</h1>
            </div>
            {children}
        </Fragment>
    )
}