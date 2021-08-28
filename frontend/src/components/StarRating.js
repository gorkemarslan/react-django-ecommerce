import React from 'react'

function StarRating({ star, totalReviews }) {
    return (
        <div className="star-rating">
            <span>
                <i className={
                    star >= 1
                        ? 'fas fa-star'
                        : star >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i className={
                    star >= 2
                        ? 'fas fa-star'
                        : star >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i className={
                    star >= 3
                        ? 'fas fa-star'
                        : star >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i className={
                    star >= 4
                        ? 'fas fa-star'
                        : star >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i className={
                    star >= 5
                        ? 'fas fa-star'
                        : star >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                {` (${totalReviews})`}
            </span>
        </div>
    )
}

export default StarRating;
