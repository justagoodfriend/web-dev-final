

const Settings = () => {
    return (
        <div className="custom-padding-left pt-3 d-flex flex-row pb-5 mb-5">
            <div className="d-flex flex-column col-7">
                <label>
                    <div className="pb-1">
                        <b>Email</b>
                    </div>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75" defaultValue="Aliyah_9@gmail.com"/>
                </label>
                <label>
                    <div className="pb-1">
                        <b>Username</b>
                    </div>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75" defaultValue="Aliyah_9"/>
                </label>
                <label>
                    <div className="pb-1">
                        <b>Password</b>
                    </div>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75" defaultValue="WebDev2023!"/>
                </label>
                <div className="pt-4">
                    <button className="background-purple text-white rounded-3 no-border px-4 py-1">
                        Save
                    </button>
                    <button className="no-background no-border text-purple px-4 py-1">
                        Cancel
                    </button>
                </div>
            </div>
            <div className="col-4 pt-3">
                <img alt="..." src={`/images/profile-empty.jpeg`} className="rounded-4 profile-pic-larger2 m-0"/>
                <button className="no-border no-background p-0 pt-3">
                    <h5>Upload new image</h5>
                </button>
                <div className="">
                    me_photo.jpg
                </div>
            </div>
        </div>
    )
}

export default Settings;