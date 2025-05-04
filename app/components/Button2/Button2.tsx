/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
type Props = {
    title: string;
    onClick?: () => void;
}

export default (props: Props) => {

    return (
        <div onClick={props.onClick}>{props.title}</div>
    )
}