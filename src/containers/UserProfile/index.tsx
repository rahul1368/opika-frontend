import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UserProfile from "../../components/UserProfile";
import { API_URL, IUser } from "../../models/user.model";

export default function UserProfileContainer(){
    const { id } = useParams();
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>({
        id: "",
        name: "",
        email: "",
        bio: "",
        profilePicture: "",
    });
    useEffect(() => {
        const getUserById = async () => {
            const response = await fetch(`${API_URL}${id}`);
            const data = await response.json();
            setUser(data);
            setIsDataLoaded(true);
            console.log("User", data);
        }
        getUserById();
    }, [id]);
    return (
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-4xl font-bold mb-24 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">User profile card</h2>
            <div className="grid grid-cols-1 gap-8">
                {
                    isDataLoaded && (
                        <UserProfile
                            key={user?.id}
                            name={user?.name}
                            bio={user?.bio}
                            email={user?.email}
                            imageSrc={user?.profilePicture}
                        />
                    )
                }
            </div>
        </div>
        
    );
}