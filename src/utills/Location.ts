const getLatLong = (): Promise<{
    success: boolean;
    latitude?: number;
    longitude?: number;
    message?: string;
}> => {
    const geolocationAPI = navigator.geolocation;

    return new Promise((resolve, reject) => {
        if (!geolocationAPI) {
            resolve({
                success: false,
                message: "Geolocation is not available in your browser!"
            });
        } else {
            geolocationAPI.getCurrentPosition(
                (position) => {
                    const { coords } = position;
                    resolve({
                        success: true,
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                },
                (error) => {
                    reject({
                        success: false,
                        message: error.message || "Something went wrong getting your position!"
                    });
                }
            );
        }
    });
};

export {
    getLatLong
};
