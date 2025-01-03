const updateFormData = <T extends Record<string, any>>(
    e: React.ChangeEvent<HTMLInputElement>,
    formData: T,
    setFormData: React.Dispatch<React.SetStateAction<T>>
) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

export default updateFormData