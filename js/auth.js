const auth = supabase.auth;

async function signUp(email, password) {
  const { data, error } = await auth.signUp({
    email,
    password
  });
  return { data, error };
}

async function signIn(email, password) {
  const { data, error } = await auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}

async function signOut() {
  await auth.signOut();
}

auth.onAuthStateChange((event, session) => {
  console.log("Auth:", event, session);
});
