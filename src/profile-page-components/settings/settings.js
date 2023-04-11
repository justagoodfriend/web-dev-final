

const Settings = () => {
    return (
        <form for="profile-fields" className="custom-padding-left pt-3 d-flex flex-row">
            <div className="d-flex flex-column col-7">
                <div>
                    <label className="pb-1" for="email"><b>Email</b></label><br/>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border border-1 border-primary p-3 py-2 mb-2" id="email" value="Aliyah_9@gmail.com"/>
                </div>
                <div>
                    <label className="pb-1" for="username"><b>Username</b></label><br/>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border border-1 border-primary p-3 py-2 mb-2" id="username" value="Aliyah_9"/>
                </div>
                <div>
                    <label className="pb-1" for="password"><b>Password</b></label><br/>
                    <input className="bg-secondary bg-opacity-10 rounded-3 border border-1 border-primary p-3 py-2 mb-2" id="password" value="WebDev2023!"/>
                </div>
                <div className="pt-4">
                    <button className="bg-primary text-white rounded-3 no-border px-4 py-1">
                        Save
                    </button>
                    <button className="no-background no-border text-primary px-4 py-1">
                        Cancel
                    </button>
                </div>
            </div>
            <div className="col-4 pt-3">
                <img alt="..." src={`/images/profile-empty.jpeg`} className="rounded-3 profile-pic-larger2"/>
                <button className="no-border no-background text-center">
                    Upload new image
                </button>
                <input type="file" className="no-border no-background text-center">
                    me_photo.jpg
                </input>
            </div>
        </form>
    )
}

export default Settings;