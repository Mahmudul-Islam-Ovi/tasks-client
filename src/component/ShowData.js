
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import DataDetails from './DataDetails';

const ShowData = () => {
    const allInformation = useLoaderData();
    return (
        <div>
            <Header></Header>
            <table className="table w-full mt-5">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Sector</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allInformation.map((information, index) =>
                            <DataDetails
                               
                                key={information._id}
                                index={index}
                                information={information}>
                            </DataDetails>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ShowData;