

const Stars = ({rating= 0}) => {
    const starsCurrent = [0,0,0,0,0];
    let index = 0;
    while (rating > 0) {
        starsCurrent[index] = 1;
        index++;
        rating--;
    }
    return (
        <div>
            {
                starsCurrent.map(star => {
                    if (star === 0) {
                        return <i className="bi bi-star pe-1"/>
                    } else {
                        return <i className="bi bi-star-fill pe-1"/>
                    }
                })
            }
        </div>
    )
}

export default Stars;