export function clientAdapterData(client) {
  const adaptedClientData = {
    id: client?.id,
    userName: client?.name,
    userId: client?.user_id,
    email: client?.email,
    isActive: client?.is_active,
    imageProfile: client?.image_profile,
    createdAt: client?.created_at,
    country: client?.country,
    address: client?.address,
  }

  return adaptedClientData
}
