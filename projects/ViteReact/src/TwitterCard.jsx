export function TwitterCard ({ username, name}) {
    
return(
    <article>
            <header>
                <img src="https://avatars.githubusercontent.com/u/129302155?v=4&size=40" alt="Img de card" />
                <div>
                    <strong>
                        {name}
                    </strong>
                    <span>@{username}</span>
                </div>
                </header>
                <aside>
                    <button>
                        Seguir
                    </button>
                </aside>
        </article>
    )

}