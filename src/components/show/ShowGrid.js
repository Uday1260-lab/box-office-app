/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useCallback } from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../Misc/custom-hooks';
const ShowGrid = ({data}) => {
    const [starredShows,dispatchStarred ] = useShows();
    const onStarClick = useCallback(
        (showId, isStarred) => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId });
          } else {
            dispatchStarred({ type: 'ADD', showId });
          }
        },
        [dispatchStarred]
      );
    return (
        <FlexGrid>
        {
            data.map(({show}) => {
                const isStarred = starredShows.includes(show.id);
                const onStarClick = useCallback( () => {
                    if(isStarred){
                        dispatchStarred({type: 'REMOVE',showId: show.id})
                    } else {
                        dispatchStarred({type: 'ADD' , showId: show.id})
                    }
                },[isStarred,show.id] ) ;
                return(
                < ShowCard key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium : IMAGE_NOT_FOUND} summary={show.summary} onStarClick={onStarClick} isStarred={starredShows.includes(show.id)} />
                );
        })}
        </FlexGrid>
    )
}

export default ShowGrid
