import React from 'react';

const Myenrollement = () => {
    return (
        <div>
            <h2>My enrollments</h2>
            <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
                <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
                <tr>
                    <th className='px-4 py-3 font-semibold truncate' >Course</th>
                    <th className='px-4 py-3 font-semibold truncate' >Duration</th>
                    <th className='px-4 py-3 font-semibold truncate' >Completed</th>
                    <th className='px-4 py-3 font-semibold truncate' >Status</th>
                </tr>

                </thead>
            </table>
        </div>
    );
};

export default Myenrollement;