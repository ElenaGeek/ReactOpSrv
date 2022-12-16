import { useCallback, useSelector } from "react";
import { useDispatch } from "react-redux";
//import store from "../../store/store";

import toggleShowName from "../../store/profile/action";

export default function Profile() {
    const { showName, name } = useSelector((state) => state);
    //const { showName, name } = store.getState().profile;
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
    dispatch(toggleShowName);
    }, [dispatch]);
    
    return (
    <div>
    <h4>Profile</h4>

    <input
    type="checkbox"
    checked={showName}
    value={showName}
    onChange={setShowName}
    />
    <span>Show Name</span>
    {showName && <div>{name}</div>}
        
    </div>
    );
    }
    
    
