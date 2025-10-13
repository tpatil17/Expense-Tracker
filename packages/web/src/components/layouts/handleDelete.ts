import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "core/Firebase/firebase";

const functions = getFunctions(app);

export const handleDelete = async (receiptId: string) => {
  try {
    const deleteFn = httpsCallable(functions, "deleteReceipt");
    const result = await deleteFn({ receiptId });
    console.log("✅ Deleted:", result.data);
  } catch (err) {
    console.error("❌ Delete failed:", err);
  }
};