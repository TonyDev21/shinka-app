import { useAuth } from '../../../context/AuthProvider';
import { API_URL } from '../../../constants/env';

const Perfil = () => {

const auth = useAuth();

async function handleSignOut(e){
    e.preventDefault();

    try{
        const response = await fetch(`${API_URL}/signout` , {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${auth.getRefreshToken()}`,
            }
        })

        if(response.ok){
            auth.signOut();
        }
    }catch(error){
        console.log(error)
    }
  }

  return (
    <section>
        <div className="container mx-auto">
            Perfil
            <div>
            <button onClick={handleSignOut} className="inline-block text-center cursor-pointer bg-red-600 text-light-color hover:bg-red-700 p-2  rounded transition duration-300">Cerrar Sesión</button>

            </div>
        </div>
    </section>
  )
}

export default Perfil
