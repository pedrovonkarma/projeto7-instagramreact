export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {props.nick}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
        )
}